from django.shortcuts import render

# Create your views here.

from .models import *
from django.http import JsonResponse
from .serializers import *

from rest_framework import generics
from rest_framework import viewsets
from rest_framework.views import APIView

from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

@method_decorator(login_required, name='dispatch')
class BookmarkListCreate(generics.ListCreateAPIView):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer

@method_decorator(login_required, name='dispatch')
class CommentListCreate(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


@method_decorator(login_required, name='dispatch')
class UserByID(generics.ListCreateAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        queryset = User.objects.filter(id=user_id)
        return queryset

@method_decorator(login_required, name='dispatch')
class CommetsByTripID(generics.ListCreateAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        trip_id = self.kwargs['trip_id']
        queryset = Comment.objects.filter(trip_id=trip_id)
        return queryset


@method_decorator(login_required, name='dispatch')
class BookmarkByUserID(generics.ListCreateAPIView):

    serializer_class = BookmarkSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        queryset = Bookmark.objects.filter(user_id=user_id)
        return queryset


@method_decorator(login_required, name='dispatch')
class CurrentUserView(APIView):
    def get(self, request):

        if request.user.is_authenticated:
            serializer = UserSerializer(request.user)
            return JsonResponse(serializer.data)
