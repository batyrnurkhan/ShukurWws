# Generated by Django 5.0 on 2023-12-28 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Rewiev',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('number', models.CharField(max_length=8)),
                ('product_name', models.CharField(max_length=255)),
                ('coments', models.TextField()),
            ],
        ),
    ]
