
from django.db import models
from django.conf import settings
from django.core.files.storage import FileSystemStorage

class Article(models.Model):
  title = models.CharField(max_length=256, verbose_name='Название статьи')
  label = models.ImageField(upload_to='uploads/labels', blank=True, verbose_name='Лого статьи')
  is_blocked = models.BooleanField(default=True, verbose_name="Заблокированно?")

  def __str__(self):
    if self.is_blocked == True:
      return f"№{str(self.pk)}: {str(self.title)} -- ЗАБЛОКИРОВАНА"
    return f"№{str(self.pk)} {str(self.title)}"

  class Meta:
        verbose_name = "Статья курса"
        verbose_name_plural = "Статьи курса"


class ArticleText(models.Model):
  article_id = models.ForeignKey('Article', on_delete=models.CASCADE)
  title = models.CharField(max_length=256, verbose_name='Название статьи')
  text = models.TextField(verbose_name='Текст статьи')
  image = models.ImageField(upload_to='uploads/articles', blank=True, verbose_name='Картинка для статьи')

  def __str__(self):
        return self.title
  
  class Meta:
        verbose_name = "Основной текст статьи"
        verbose_name_plural = "Текст для статей курса"


class Extra(models.Model):
  article_id = models.ForeignKey('Article', on_delete=models.CASCADE)
  title = models.CharField(max_length=256, verbose_name='Название екстра задания')
  text = models.TextField(verbose_name='Текст екстра задания')
  image = models.ImageField(upload_to='uploads/extra', blank=True, verbose_name='Картинка для задания')

  def __str__(self):
        return self.title

  class Meta:
    verbose_name = "Екстра задание"
    verbose_name_plural = "Екстра задания"


class Bonus(models.Model):
  article_id = models.ForeignKey('Article', on_delete=models.CASCADE)
  title = models.CharField(max_length=256, verbose_name='Название для бонуса')
  text = models.TextField(verbose_name='Текст для бонуса')
  image = models.ImageField(upload_to='uploads/bonus/', blank=True, verbose_name='Картинка для бонуса')
  pdf = models.FileField(upload_to='uploads/bonus', blank=True, verbose_name='ПДФка для бонуса')
  meditation = models.FileField(upload_to='uploads/meditation', blank=True, verbose_name='Медитация')
  instruction = models.FileField(
    storage=FileSystemStorage(location=settings.MEDIA_ROOT),
    default='settings.MEDIA_ROOT/uploads/extra/instruction.pdf',
    upload_to='uploads/meditation',
    verbose_name='Инструкция к медитации',
    )

  def __str__(self):
        return self.title

  class Meta:
    verbose_name = "Бонус задание"
    verbose_name_plural = "Бонус задания"
  