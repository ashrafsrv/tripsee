# Generated by Django 2.1.2 on 2018-10-26 03:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trip_maker', '0009_auto_20181026_1305'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='place',
            name='latitudes',
        ),
        migrations.RemoveField(
            model_name='place',
            name='longitudes',
        ),
    ]
