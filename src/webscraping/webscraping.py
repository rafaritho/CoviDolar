import time 
import requests
import pandas as pd 
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
import json


#Pegar conteúdo HTML 

url = "https://br.advfn.com/bolsa-de-valores/fx/USDBRL/historico/mais-dados-historicos"

option = Options()
option.headless = True
driver = webdriver.Firefox()

driver.get(url)

element = driver.find_element_by_xpath("//div[@class='TableElement']//table")
html_content = element.get_attribute('outerHTML')

#print(html_content)

#Parsear o conteúdo - beautiful soup

soup = BeautifulSoup(html_content, 'html.parser')
table = soup.find(name='table')

# Estruturar conteúdo em um data frame - Pandas

df_full = pd.read_html(str(table))[0]
df = df_full[['Data', 'Fechamento']]
df.columns = ['date', 'fechamento']

#print(df)

# Criação do dicionario

cotacaodiaria = {}

#cotacaodiaria['date'] =
cotacaodiaria['cotacao'] = df.to_dict('records')

print(cotacaodiaria['cotacao'])

driver.quit()

# Converter em um arquivo JSON

js = json.dumps(cotacaodiaria)
fp = open('cotacao.json', 'w')
fp.write(js)
fp.close()


