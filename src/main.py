import pygame

pygame.init()

WIDTH, HEIGHT = pygame.display.Info().current_w, pygame.display.Info().current_h
WIN = pygame.display.set_mode((0, 0))  # , pygame.FULLSCREEN
pygame.display.set_caption("Solar System Simulation")

COLOR_UNIVERSE = (0, 0, 0)


def main():
    run = True
    clock = pygame.time.Clock()

    while run:
        clock.tick(60)  # run this loop max 60 times per sec
        WIN.fill(COLOR_UNIVERSE)

        for event in pygame.event.get():
            if event.type == pygame.QUIT or (event.type == pygame.KEYDOWN and
                                             (event.key == pygame.K_x or event.key == pygame.K_ESCAPE)):
                run = False

        pygame.display.update()

    pygame.quit()


main()
