import heapq

def find_median(n, arr):
    
    max_sq, min_sq, result = [], [], 0
    
    for i in range(n):
        heapq.heappush(max_sq, -arr[i])  
        heapq.heappush(min_sq, -heapq.heappop(max_sq))
        
        if len(min_sq) > len(max_sq):
            heapq.heappush(max_sq, -heapq.heappop(min_sq))  
        result -= max_sq[0]  

    return result

n, arr =int(input()), list(map(int, input().split()))
print(find_median(n, arr))
