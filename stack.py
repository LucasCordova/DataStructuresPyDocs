import os
from datastructures.istack import IStack, T
from datastructures.linked_list import LinkedList

class Stack(IStack[T]):
    def __init__(self) -> None:
        raise NotImplementedError('__init__ not implemented')

    def push(self, item: T) -> None:
        raise NotImplementedError('push not implemented')
    
    def pop(self) -> T:
        raise NotImplementedError('pop not implemented')

    def peek(self) -> T:
        raise NotImplementedError('peek not implemented')
    
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
        return str(self._stack)
    
    def __repr__(self) -> str: 
        return f'Stack({self._stack})'
    
if __name__ == '__main__':
    filename = os.path.basename(__file__)
    print(f'This is the {filename} file.\nDid you mean to run your tests or program.py file?\nFor tests, run them from the Test Explorer on the left.')