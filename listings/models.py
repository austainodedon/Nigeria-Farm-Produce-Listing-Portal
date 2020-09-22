from django.db import models
from django.utils.timezone import now
from resellars.models import Resellar

class Listing(models.Model):
    class ProduceType(models.TextChoices):
        PLANTS = 'Plant Produce'
        ANIMAL = 'Animal Produce'
    
    class ProduceStateType(models.TextChoices):
        FRESH = 'Fresh'
        OLD = 'Old'
        PERISHING = 'Perishing'

    resellar = models.ForeignKey(Resellar, on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=150)
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=15)
    description = models.TextField(blank=True)
    produce_type = models.CharField(max_length=50, choices=ProduceType.choices, default=ProduceType.PLANTS)
    price = models.IntegerField()
    quantity = models.IntegerField()
    weight = models.DecimalField(max_digits=5, decimal_places=1)
    produce_state_type = models.CharField(max_length=50, choices=ProduceStateType.choices, default=ProduceStateType.FRESH)
    sqft = models.IntegerField()
    in_stock = models.BooleanField(default=False)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/')
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_2 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_3 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_4 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_5 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_6 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_7 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_8 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_9 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_10 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_11 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_12 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_13 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_14 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_15 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_16 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_17 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_18 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_19 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_20 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=now, blank=True)

    def __str__(self):
        return self.title