import time
import os

def timer(m,s):
    
    while (m!=0 or s!=0):
        if(s>=10):
            print(m,':',s, end = '\r')
        else:
            print(m,':0',s, end = '\r')
        time.sleep(1)
        s=s-1
        if (s==0 and m!=0):
            s = 60
            m = m-1          

    print("Time Out!!", end = '\r')


m = int(input("Enter minutes = "))
s = int(input("Enter seconds = "))
os.system('cls')
timer(m,s)
