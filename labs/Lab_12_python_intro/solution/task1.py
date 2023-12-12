def count_ways(N, M):
    arr = [[0]*M for _ in range(N)]
    arr[0][0] = 1
    
    for i in range(N):
        for j in range(M):
            if i-2 >= 0 and j-1 >= 0:
                arr[i][j] += arr[i-2][j-1]
            if i-1 >= 0 and j-2 >= 0:
                arr[i][j] += arr[i-1][j-2]
    
    return arr[N-1][M-1]

N, M = map(int, input().split())
print(count_ways(N, M))
