from django.urls import path, re_path
from . import views

app_name = 'authentication'

urlpatterns = [


    path('login', views.user_login, name='login'),
    path('logout', views.user_logout, name='logout'),

    path('register', views.register, name='register'),



]
