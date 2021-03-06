# Generated by Django 2.1.2 on 2018-10-26 00:38

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trip_maker', '0007_auto_20181025_2017'),
    ]

    operations = [
        migrations.AddField(
            model_name='trip',
            name='trip_name',
            field=models.CharField(default='My Trip', max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='trip',
            name='rating',
            field=models.FloatField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)]),
        ),
    ]
