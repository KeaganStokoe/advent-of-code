formatted_list = []
counter = 0
with open('01_input.txt', 'rb') as f:
    mylist = f.read().splitlines()
    for i in mylist:
        formatted_list.append(int(i))

for index, value in enumerate(formatted_list):
    if index == 0:
        continue
    if value > formatted_list[index - 1]:
        counter += 1

print(counter)

