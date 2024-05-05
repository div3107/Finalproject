from django.contrib import admin
from django.urls import path
from Teachtogether.views import * # Import your views module

urlpatterns = [
    path('' , login , name="login"),
    path('admin/', admin.site.urls),
]
