from rest_framework import serializers
from trip_maker.models import Trip
from trip_maker.models import TripStop
from trip_maker.models import Place
from django.contrib.auth.models import User

class TripSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Trip
        fields = ('__all__')

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = ('__all__')

# Allow place serializer to take many entries
""" class PlaceSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        many = kwargs.pop('many', True)
        super(PlaceSerializer, self).__init__(many=many, *args, **kwargs)

    class Meta:
        model = Place
        fields = ('__all__') """

# Trip stops joined with trips and places
class SimpleTripStopSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripStop
        fields = ('__all__')

# Trip stops joined with trips and places
class JoinedTripStopSerializer(serializers.ModelSerializer):
    trip_id = TripSerializer(read_only=True)
    place_id = PlaceSerializer(read_only=True)
    class Meta:
        model = TripStop
        fields = ('__all__')
