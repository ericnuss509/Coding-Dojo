class Car:
    def __init__(self, name, model, year, speed):
        self.name = name
        self.model = model
        self.speed = speed
        self.year = year


    def move(self):
        
        if self.speed == 0:
            self.speed = 10


    def stop(self):

        if self.speed > 0:
            self.speed = 0

class ElectricCar(Car):
    def __init__(self, name, model, year, speed, price, aerodynamics, brand):
        super(name, model, year, speed)
        self.price = price
        self.aerodynamics = aerodynamics


