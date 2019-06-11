from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.template import loader
from django.contrib.auth import authenticate, login, logout

from django.shortcuts import redirect

from django.contrib.auth.models import User, Group


# user loggin view
def user_login(request):

    # verify account for POST method
    if request.method == "POST":
        username = request.POST.get('username','')
        password = request.POST.get('password','')

        user = authenticate(username=username, password=password)

        # username and password matches case
        if user is not None:
            # verify account active
            if user.is_active:
                request.session.set_expiry(86400)
                login(request, user)

                # user loogged in, redirect webpage
                return redirect('/')
            else:
                context = {'invalid_message':"Your account is not active",}
                return login_page_view(request, context)
        else:
            context = {'invalid_message':"Invalid username or password",}
            return login_page_view(request, context)


    # render login tmeplate
    else:
        return login_page_view(request, {})


# function call for rendering login page
def login_page_view(request, context):
    template = loader.get_template('authentication/login.html')
    return HttpResponse(template.render(context, request))

# user view for accpeting registration post
def register(request):

    if request.method == "POST":

        username = request.POST.get('username','')
        email = request.POST.get('email','')
        firstname = request.POST.get('firstname','')
        lastname = request.POST.get('lastname','')
        password = request.POST.get('password','')
        conf_password = request.POST.get('confirm-password','')


        try:
            new_user = User.objects.create_user(username=username, email=email, password=password, first_name=firstname, last_name=lastname)
            new_user.save()
            login(request, new_user)
            return redirect('/')
        except:
            context = {'invalid_message':"Acccount already exist",}
            return login_page_view(request, context)
    else:
        # return login page for other methods
        return login_page_view(request, {})


# logout user
def user_logout(request):
    logout(request)
    return redirect('/')

    # Redirect to a success page.
