from django.urls import path
from django.conf.urls import url

from . import views
from . import views_trip

urlpatterns = [
    path('api/trip/', views_trip.TripListCreate.as_view(), name='trip'),
    path('api/bookmark/', views.BookmarkListCreate.as_view(), name='bookmark'),
    path('api/comment/', views.CommentListCreate.as_view(), name='comment'),
    path('api/tripStop/simple/', views_trip.SimpleTripStopListCreate.as_view({'get':'list', 'post':'create'}), name='tripStop'),
    path('api/tripStop/joined/', views_trip.JoinedTripStopListCreate.as_view({'get': 'list'}), name='tripStop joined'),
    path('api/place/', views_trip.PlaceListCreate.as_view({'get':'list', 'post':'create'}), name='place'),

    url(r'api/user/(?P<user_id>\d+)/$', views.UserByID.as_view(), name='user_by_id'),

    url(r'api/trip/(?P<trip_id>\d+)/$', views_trip.TripByID.as_view(), name='trip_by_id'),

    url(r'api/trip/user_id/(?P<user_id>\d+)/$', views_trip.TripByUserID.as_view(), name='trip_by_user_id'),

    url(r'api/tripStop/trip_id/(?P<trip_id>\d+)/$', views_trip.TripStopByTripID.as_view(), name='tripStop_by_trip_id'),

    url(r'api/bookmark/user_id/(?P<user_id>\d+)/$', views.BookmarkByUserID.as_view(), name='bookmark_by_user_id'),

    url(r'api/comment/trip_id/(?P<trip_id>\d+)/$', views.CommetsByTripID.as_view(), name='comment_by_trip_id'),

    url(r'api/place/(?P<place_id>\d+)/$', views_trip.PlaceByID.as_view(), name='place_by_id'),

    url(r'api/user/current/', views.CurrentUserView.as_view(), name='current_user'),

    # url(r'api/bookmark/user_id/(?P<user_id>\d+)/$', views.BookmarkByUserID.as_view(), name='bookmark_by_user_id'),
    # url(r'api/comment/trip_id/(?P<trip_id>\d+)/$', views.CommetsByID.as_view(), name='comment_id'),
    # url(r'api/comment/trip_id/(?P<trip_id>\d+)/$', views.CommetsByID.as_view(), name='comment_id'),
    # url(r'api/comment/trip_id/(?P<trip_id>\d+)/$', views.CommetsByID.as_view(), name='comment_id'),


]
