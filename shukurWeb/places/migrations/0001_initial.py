# Generated by Django 5.0 on 2023-12-26 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Rec_places',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('location', models.TextField()),
                ('raiting', models.FloatField()),
                ('img', models.ImageField(null=True, upload_to='photos/%Y/%m/%d/')),
            ],
        ),
    ]
