from django.apps import AppConfig


from django.contrib.auth.models import Group, User
from trip_maker.models import *

class TripMakerConfig(AppConfig):
    name = 'trip_maker'


class PopulateDB():

    # create sample user
    try:
        user_john = User.objects.create_user('sam', password='sam')
        # user_sophie = User.objects.create_superuser('admin', 'admin@example.com', password='admin', is_staff=True, is_superuser=True)
    except:
        print("user already exist")


    # create another sample user
    try:
        user_sophie = User.objects.create_superuser('admin', 'admin@example.com', password='admin', is_staff=True, is_superuser=True)
    except:
        print("user already exist")


    user1 = User.objects.get(pk=1)
    user2 = User.objects.get(pk=2)


    # create smaple trip
    sample_trip_1 = Trip.objects.create(created_by=user1, num_stops = 5, distance = 200, duration=50, rating = 4, description='a long trip')
    sample_trip_2 = Trip.objects.create(created_by=user2, num_stops = 3, distance = 100, duration=20, rating = 2, description='a mid trip')


    # create sample Bookmark
    sample_bookmark_1 = Bookmark.objects.create(user_id=user1, trip_id=sample_trip_1)
    sample_bookmark_2 = Bookmark.objects.create(user_id=user1, trip_id=sample_trip_2)

    sample_bookmark_3 = Bookmark.objects.create(user_id=user2, trip_id=sample_trip_2)


    # create sample Comment
    sample_comment_1 = Comment.objects.create(trip_id=sample_trip_1, written_by=user1,content="good trip 1", rating=5,)
    sample_comment_2 = Comment.objects.create(trip_id=sample_trip_1, written_by=user2,content="okay trip 1", rating=4,)

    sample_comment_3 = Comment.objects.create(trip_id=sample_trip_2, written_by=user1,content="no bad trip 2", rating=3,)


    # create sample place

    sample_place_1 = Place.objects.create(address="harbour bridge")
    sample_place_2 = Place.objects.create(address="Opera House")
    sample_place_3 = Place.objects.create(address="Biotic Garden")
    sample_place_4 = Place.objects.create(address="Wynyard Station")


    # append place to trip_id

    sample_trip_stop_1 = TripStop.objects.create(trip_id=sample_trip_1, place_id=sample_place_1, stop_num=1)
    sample_trip_stop_2 = TripStop.objects.create(trip_id=sample_trip_1, place_id=sample_place_2, stop_num=2)
    sample_trip_stop_3 = TripStop.objects.create(trip_id=sample_trip_1, place_id=sample_place_3, stop_num=3)
    sample_trip_stop_4 = TripStop.objects.create(trip_id=sample_trip_1, place_id=sample_place_4, stop_num=4)

    sample_trip_stop_5 = TripStop.objects.create(trip_id=sample_trip_2, place_id=sample_place_2, stop_num=1)
    sample_trip_stop_6 = TripStop.objects.create(trip_id=sample_trip_2, place_id=sample_place_4, stop_num=2)
