class Human:
    """
    Human

    Parameters:
        * gender: int
            Gender == 0 || 1

    Variables:
        * gender: int
    """
    def __init__(self, gender):
        self.gender = gender

    def __repr__(self):
        return (str(self.gender))

    def eat(self, food):
        print("Human eat" + str(food))
