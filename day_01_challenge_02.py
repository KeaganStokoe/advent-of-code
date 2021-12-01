measurements = []
counter = 0

with open('01_input.txt', 'rb') as f:
    data = f.read()
    measurements = data.splitlines()
    measurements = list(map(int, measurements))

for i, measurement in enumerate(measurements):
        try:
            if (measurements[i] + measurements[i+1] + measurements[i+2]) < (measurements[i+1] + measurements[i+2] + measurements[i+3]):
                counter += 1
        except IndexError:
            print(counter)
            break    