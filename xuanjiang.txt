#!/usr/bin/env python3
#  coding=utf-8

#useing python  implement Xi'an shiyou unniversity spider
#Environments: Beautiful selenium  and re
#coded at 2016.9.18 by liuyuzhuo


from bs4 import BeautifulSoup
from urllib import urlopen
from selenium import webdriver
import xlwt
import os
import threading
import re
import time
import datetime


def main():

    SleepTime =0.5  #获取地址间歇时间
    Days = 1        #爬取未来n天的宣讲会信息
    AllInfor = []   #爬取的信息
    driver = webdriver.Chrome( \
        executable_path=r'C:\Program Files (x86)\Google\Chrome\Application\chromedriver')  # 浏览器的地址
    URL = r'http://xjh.haitou.cc'
    AllInfor = GetUrlFromWeb(URL,driver,Days)
    id =1           #条目信息编号
    for url in AllInfor:
        print ('正在获取'+url[4]+'......' + str(id) + '/' + str(len(AllInfor)) )
        url.extend(GetFileFromWeb(url[4],driver))
        time.sleep(SleepTime)
        id = id + 1
    driver.close()
    StoreExcel(AllInfor)


def GetUrlFromWeb(URL,driver,Days):
    AllInfor = []
    ISOTIMEFORMAT ='%Y-%m-%d %X'
    Finished = False    #爬虫结束标志
    for i in range(100):    #默认爬取100页信息
        try:
            if (i == 0):
                PAGE = URL
            else:
                PAGE = URL + '/xa/page-' + str(i + 1)
            driver.get(PAGE)
            # print (driver.page_source)
            html = BeautifulSoup(driver.page_source, "lxml")  # 解析html语言
        except:
            debug = open(r'C:\Users\new\Desktop\debug\debug.txt', 'a')
            debug.write('获取' + PAGE + '页面信息失败        '+ time.strftime(ISOTIMEFORMAT,time.localtime())+'\n' )
            debug.close()

        ALLTag = html.find('tbody')
        # print ALLTag
        EachTag = ALLTag.find_all('tr')

        #信息获取
        for Tag in EachTag:
            Title = Tag.contents[1].a['title'].encode('utf-8')  # 包含公司、学校、地点
            SchoolURL = URL + Tag.contents[1].a['href']
            Time = Tag.contents[2].span.string
            alljobs = Title.splitlines()
            alljobs.extend([Time, SchoolURL])
            AllInfor.append(alljobs)

            #判断宣讲会日期是否在范围内
            date = datetime.datetime.strptime(Time,'%Y-%m-%d %H:%M')
            time_dif=date-datetime.datetime.now()
            if(time_dif.days >Days):
                return AllInfor
    # print AllURL
    return AllInfor


def GetFileFromWeb(Url,driver):
    ALLJOB = 'java|C\+?\+?|android|安卓|前端|后端|测试|网络|数据库|运维|python'

    driver.get(Url)
    html = BeautifulSoup(driver.page_source, "lxml")  # 解析html语言
    try:
        panel_body = html.find_all('div',class_='panel-body')[1]
        text = panel_body.get_text().encode('utf-8')
    except:
        debug = open(r'C:\Users\new\Desktop\debug\debug.txt','a')
        debug.write('获取'+Url +'页面信息失败 at' )
        debug.close()
        text = ''

    #消除重复职位
    zhiwei = []
    lowtext = re.findall(ALLJOB,text.lower())
    zhiwei.extend(list(set(lowtext)))
    return zhiwei

def StoreExcel(AllInfor):
    wbk = xlwt.Workbook(encoding='utf-8', style_compression=0)
    sheet = wbk.add_sheet('sheet 1', cell_overwrite_ok=True)  ##第二参数用于确认同一个cell单元是否可以重设值。
    for i in range(len(AllInfor)):
        for j in range(len(AllInfor[i])):
            sheet.write(i,j ,AllInfor[i][j])

    style = xlwt.XFStyle()
    font = xlwt.Font()
    font.name = 'Times New Roman'
    font.bold = True
    style.font = font
    # sheet.write(0, 1, 'some bold Times text', style)

    wbk.save(r'C:\Users\new\Desktop\debug\final.xls')  ##该文件名必须存在


if __name__ == '__main__':
    main()

