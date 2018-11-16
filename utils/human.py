class Human:
    """
    Human

    Parameters:
        * gender: int
            Gender == 0 || 1

    Variables:
        * gender: int
            Biological gender at born
        * energy: int
            the capacity for activity, available power.
    """
    def __init__(self, gender):
        self.gender = gender
        self.energy = 100

    def __repr__(self):
        return (str(self.gender))

    def eat(self, food):
        self.energy += 25
        print("Human eat" + str(food))

    def sleep(self, time):
        self.energy = self.energy + time*10
        print("Human sleep during " + str(time) + " hours.")
