from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response

from .models import *

from .serializers_trip import *

from rest_framework import generics

#-------------------TRIPS----------------------------------------#
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

@method_decorator(login_required, name='dispatch')
class TripListCreate(generics.ListCreateAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

@method_decorator(login_required, name='dispatch')
class TripByID(generics.ListCreateAPIView):
    serializer_class = TripSerializer

    def get_queryset(self):
        trip_id = self.kwargs['trip_id']
        queryset = Trip.objects.filter(trip_id=trip_id)
        return queryset

@method_decorator(login_required, name='dispatch')
class TripByUserID(generics.ListCreateAPIView):
    serializer_class = TripSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        queryset = Trip.objects.filter(created_by=user_id)
        return queryset

#-------------------TRIP STOP----------------------------------------#

@method_decorator(login_required, name='dispatch')
class SimpleTripStopListCreate(viewsets.ModelViewSet):
    queryset = TripStop.objects.all()
    serializer_class = SimpleTripStopSerializer

    def create(self, request, *args, **kwargs):
        data = request.data.get("items") if 'items' in request.data else request.data
        many = isinstance(data, list)
        print (data, many)
        serializer = self.get_serializer(data=data, many=many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

@method_decorator(login_required, name='dispatch')
class JoinedTripStopListCreate(viewsets.ModelViewSet):
    queryset = TripStop.objects.all()
    serializer_class = JoinedTripStopSerializer

@method_decorator(login_required, name='dispatch')
class TripStopByTripID(generics.ListCreateAPIView):
    serializer_class = JoinedTripStopSerializer
    def get_queryset(self):
        trip_id = self.kwargs['trip_id']
        queryset = TripStop.objects.filter(trip_id=trip_id)
        return queryset

#-------------------PLACES----------------------------------------#

@method_decorator(login_required, name='dispatch')
class PlaceListCreate(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer

    def create(self, request, *args, **kwargs):
        data = request.data.get("items") if 'items' in request.data else request.data
        many = isinstance(data, list)
        print (data, many)
        serializer = self.get_serializer(data=data, many=many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


@method_decorator(login_required, name='dispatch')
class PlaceByID(generics.ListCreateAPIView):
    serializer_class = PlaceSerializer

    def get_queryset(self):
        place_id = self.kwargs['place_id']
        queryset = Place.objects.filter(place_id=place_id)
        return queryset
