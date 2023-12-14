import pygame

pygame.init()

WIDTH, HEIGHT = 600, 600
WIN = pygame.display.set_mode((WIDTH, HEIGHT))
WIN = pygame.display.set_mode((0, 0))  # , pygame.FULLSCREEN
pygame.display.set_caption("Solar System Simulation")
