# Generated by Django 4.0.4 on 2022-05-23 10:04

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0005_alter_bonus_text_alter_extra_text'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bonus',
            old_name='text',
            new_name='text_bonus',
        ),
        migrations.AddField(
            model_name='bonus',
            name='text_meditation',
            field=tinymce.models.HTMLField(default='медитация', verbose_name='Текст для медитации'),
        ),
    ]