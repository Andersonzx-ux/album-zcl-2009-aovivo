import sys, json, colorsys
import numpy as np
from PIL import Image
base = sys.argv[1]
def hx(c): return '#%02X%02X%02X' % tuple(int(round(v)) for v in c)
def med(a): return np.median(a.reshape(-1,3),axis=0)
out={}
for n in (1,2):
    im = np.asarray(Image.open(f'{base}/assets/cover{n}.jpg').convert('RGB')).astype(float)
    H,W,_ = im.shape
    lum = (0.2126*im[...,0]+0.7152*im[...,1]+0.0722*im[...,2])
    flat = im.reshape(-1,3); fl = lum.reshape(-1)
    # faixas de luminância (ignora o 1% mais claro/escuro para tirar ruído)
    def band(lo,hi):
        a,b = np.percentile(fl,[lo,hi]); m=(fl>=a)&(fl<=b); return np.median(flat[m],axis=0)
    # título dourado: pixels saturados/quentes na região do título
    y0,y1,x0,x1 = 335,500,190,450
    reg = im[y0:y1,x0:x1].reshape(-1,3)
    hsv = np.array([colorsys.rgb_to_hsv(*(p/255)) for p in reg])
    gold = reg[(hsv[:,0]>0.09)&(hsv[:,0]<0.16)&(hsv[:,1]>0.35)&(hsv[:,2]>0.60)]
    # relógio: mais claro da região do mostrador
    cy0,cy1,cx0,cx1 = 30,200,235,430
    clock = im[cy0:cy1,cx0:cx1].reshape(-1,3); cl = (0.2126*clock[:,0]+0.7152*clock[:,1]+0.0722*clock[:,2])
    top = clock[cl>=np.percentile(cl,85)]
    mid = clock[(cl>=np.percentile(cl,55))&(cl<=np.percentile(cl,75))]
    # fundo do palco (faixa listrada) e palco/chão
    strip = im[255:325,0:640].reshape(-1,3)
    floor = im[500:576,150:500].reshape(-1,3)
    r = dict(
      darkest = hx(band(0,30)),
      p30_55 = hx(band(30,55)), p55_75=hx(band(55,75)), p75_90=hx(band(75,90)),
      goldTitle = hx(np.median(gold,axis=0)), goldN=len(gold),
      clockLight = hx(np.median(top,axis=0)), clockMid=hx(np.median(mid,axis=0)),
      strip = hx(np.median(strip,axis=0)), stripBright = hx(np.median(strip[(0.2126*strip[:,0]+0.7152*strip[:,1]+0.0722*strip[:,2])>=np.percentile(0.2126*strip[:,0]+0.7152*strip[:,1]+0.0722*strip[:,2],80)],axis=0)),
      floor = hx(med(floor)),
      bgTop = hx(med(im[0:30,60:200])),
    )
    out[n]=r
    print(n, json.dumps(r,indent=1))
