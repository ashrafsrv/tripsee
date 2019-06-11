from django.shortcuts import render
from django.contrib.auth.decorators import login_required
# Create your views here.


user_unauth_url = "/auth/login"


@login_required(login_url=user_unauth_url)
def index(request):
    return render(request, 'frontend/index.html')
