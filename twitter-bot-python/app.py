#!path+=**/Python/3.7/bin:Google\ Chrome.app/Contents/MacOS
# Please download
# geckodriver from, This is a macos download link straight to the zip
#  https://github.com/mozilla/geckodriver/releases/download/v0.24.0/geckodriver-v0.24.0-macos.tar.gz
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import selenium.webdriver.chrome.service as service

import time


class GoogleBot:
    def __init__(self, search_item):
        self.bot = service.Service(
            '**/Applications/Google\ Chrome.app/Contents/MacOS')
        self.search = search_item

    def search(self):
        search_input = self.search
        bot = self.bot
        bot.start()
        capabilities = {
            'chrome.binary': '**/Google\ Chrome\ Canary.app/Contents/MacOS'}
        driver = webdriver.Remote(service.service_url, capabilities)
        driver.get('http://www.google.com/xhtml')
        time.sleep(5)
        # searchbar = bot.find_element_by_class_name("gLFyfgsfi")
        # searchbar.clear()
        # searchbar.send_keys(search_input)


gs = GoogleBot("NBA")
gs.search()

