# finalproject/<app_name>/views.py

from django.shortcuts import render

def login(request):
    return render(request, 'login.html')
