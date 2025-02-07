import os
from datastructures.iqueue import IQueue, T
from datastructures.linked_list import LinkedList

class Queue(IQueue[T]): 
    def __init__(self) -> None:
        self._queue = LinkedList()
    
    def enqueue(self, item: T) -> None:
        self._queue.push_back(item)
    
    def dequeue(self) -> T:
        raise NotImplementedError('dequeue not implemented')
    
    def front(self) -> T:
        raise NotImplementedError('front not implemented')
    
    def back(self) -> T:
        raise NotImplementedError('back not implemented')
    
    def size(self) -> int: 
        raise NotImplementedError('size not implemented')
    
    def is_empty(self) -> bool: 
        raise NotImplementedError('is_empty not implemented')
    
    def clear(self) -> None: 
        raise NotImplementedError('clear not implemented')

    def __contains__(self, item: T) -> bool:
        raise NotImplementedError('__contains__ not implemented')
    
    def __eq__(self, other: object) -> bool:
        raise NotImplementedError('__eq__ not implemented')

    def __str__(self) -> str: 
        return str(self._queue)
    
    def __repr__(self) -> str: 
        return f'ListQueue({self._queue})'

if __name__ == '__main__':
    filename = os.path.basename(__file__)
    print(f'This is the {filename} file.\nDid you mean to run your tests or program.py file?\nFor tests, run them from the Test Explorer on the left.')