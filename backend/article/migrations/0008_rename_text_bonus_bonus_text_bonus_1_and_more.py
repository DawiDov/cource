# Generated by Django 4.0.4 on 2022-05-23 13:45

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0007_alter_bonus_instruction'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bonus',
            old_name='text_bonus',
            new_name='text_bonus_1',
        ),
        migrations.AddField(
            model_name='bonus',
            name='text_bonus_2',
            field=tinymce.models.HTMLField(default='', verbose_name='Текст для бонуса'),
        ),
    ]
