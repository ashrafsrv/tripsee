from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import User
from django.db.models import Avg


class Trip(models.Model):
    trip_id = models.AutoField(primary_key=True)
    trip_name = models.CharField(max_length=100)
    created_by = models.ForeignKey(
        User , on_delete=models.CASCADE
    )

    num_stops = models.IntegerField()
    distance = models.IntegerField()
    duration = models.IntegerField()

    rating = models.FloatField(
        validators=[MaxValueValidator(5), MinValueValidator(0)], default=0
    )
    # Member.objects.aggregate(Avg('wins'))


    privacy = models.BooleanField(default=True)
    is_return_trip = models.BooleanField(default=False)

    last_modified = models.DateTimeField(auto_now=True, auto_now_add = False)
    created = models.DateTimeField(auto_now=False, auto_now_add = True)

    description = models.CharField(max_length=500)


class Bookmark(models.Model):
    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE
    )

    trip_id =  models.ForeignKey(
        'trip_maker.Trip', on_delete=models.CASCADE
    )




class Comment(models.Model):
    comment_id = models.AutoField(primary_key=True)
    trip_id =  models.ForeignKey(
        'trip_maker.Trip', on_delete=models.CASCADE
    )

    written_by = models.ForeignKey(
        User, on_delete=models.CASCADE
    )

    content = models.CharField(max_length=250)

    date = models.DateTimeField(auto_now=False, auto_now_add = True)

    rating = models.IntegerField(
        validators=[MaxValueValidator(5), MinValueValidator(1)], default=True
    )

class TripStop(models.Model):

    trip_id = models.ForeignKey(
        'trip_maker.Trip', on_delete=models.CASCADE
    )

    place_id = models.ForeignKey(
        'trip_maker.Place', on_delete=models.CASCADE
    )

    stop_num = models.IntegerField()


class Place(models.Model):
    place_id = models.AutoField(primary_key=True)
    place_name = models.CharField(max_length=500, default="")
    google_maps_id = models.CharField(max_length=1000, default="")
    address = models.CharField(max_length=80)
