# Generated by Django 2.1.1 on 2018-10-25 09:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trip_maker', '0006_auto_20181024_2017'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tripcomment',
            name='comment_id',
        ),
        migrations.RemoveField(
            model_name='tripcomment',
            name='trip_id',
        ),
        migrations.DeleteModel(
            name='TripComment',
        ),
    ]
