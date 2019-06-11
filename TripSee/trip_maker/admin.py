from django.contrib import admin

# Register your models here.
from .models import Trip, Bookmark, Comment, TripStop, Place

admin.site.register(Trip)
admin.site.register(Bookmark)
admin.site.register(Comment)
admin.site.register(TripStop)
admin.site.register(Place)
