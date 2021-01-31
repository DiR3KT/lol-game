import requests
from io import BytesIO
from PIL import Image

champions = ['monkeyking', 'yasuo', 'yuumi', 'yorick', 'zac', 'zed', 'ziggs', 'zilean', 'zoe', 'zyra', 'qiyana', 'senna', 'aphelios', 'sett', 'lillia', 'yone']

for champion in champions:
    url = "https://cdn.communitydragon.org/10.16.1/champion/"+champion+"/ability-icon/p"
    response = requests.get(url)
    im = Image.open(BytesIO(response.content))
    im.convert('RGB').save(champion+"_p.jpg")

    url = "https://cdn.communitydragon.org/10.16.1/champion/"+champion+"/ability-icon/q"
    response = requests.get(url)
    im = Image.open(BytesIO(response.content))
    im.convert('RGB').save(champion+"_q.jpg")

    url = "https://cdn.communitydragon.org/10.16.1/champion/"+champion+"/ability-icon/w"
    response = requests.get(url)
    im = Image.open(BytesIO(response.content))
    im.convert('RGB').save(champion+"_w.jpg")

    url = "https://cdn.communitydragon.org/10.16.1/champion/"+champion+"/ability-icon/e"
    response = requests.get(url)
    im = Image.open(BytesIO(response.content))
    im.convert('RGB').save(champion+"_e.jpg")

    url = "https://cdn.communitydragon.org/10.16.1/champion/"+champion+"/ability-icon/r"
    response = requests.get(url)
    im = Image.open(BytesIO(response.content))
    im.convert('RGB').save(champion+"_r.jpg")
