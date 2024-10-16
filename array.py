# datastructures.array.Array

""" This module defines an Array class that represents a one-dimensional array. 
    See the stipulations in iarray.py for more information on the methods and their expected behavior.
    Methods that are not implemented raise a NotImplementedError until they are implemented.
"""

from __future__ import annotations
from collections.abc import Sequence
import os
from typing import Any, Iterator, Optional, overload
import numpy as np
from numpy.typing import NDArray


from datastructures.iarray import IArray, T


class Array(IArray[T]):  

    def __init__(self, starting_sequence: Sequence[T]=[], data_type: Optional[type]=object) -> None: 
        if not isinstance(starting_sequence, Sequence): 
            raise ValueError('Sequence must be a valid sequence type.')
        
        if data_type and not all(isinstance(item, data_type) for item in starting_sequence):
            raise TypeError(f'All items in  {starting_sequence} must be of the same type: {data_type}')
        
        self._item_count: int = len(starting_sequence)
        self._data_type: type = type(starting_sequence[0]) if len(starting_sequence) > 0 else object
        self._items: NDArray[T] = np.empty(self._item_count, dtype=self._data_type)

        for i in range(self._item_count):
            self._items[i] = starting_sequence[i]

    @overload
    def __getitem__(self, index: int) -> T: ...
    @overload
    def __getitem__(self, index: slice) -> IArray[T]: ...
    def __getitem__(self, index: int | slice) -> T | IArray[T]:
            if isinstance(index, slice):
                start = index.start if index.start is not None else 0
                stop = index.stop if index.stop is not None else self._item_count
                step = index.step if index.step is not None else 1
                
                start = max(min(start, self._item_count), -self._item_count)
                stop = max(min(stop, self._item_count), -self._item_count)

                sliced_items = self._items[start:stop:step]
                
                return Array(sliced_items.tolist())  

            if index < -self._item_count or index >= self._item_count:
                raise IndexError('Index must be in range of array.')
            
            item = self._items[index]
            return item.item() if isinstance(item, np.generic) else item
    
    def __setitem__(self, index: int, item: T) -> None:
        if not isinstance(index, int): raise TypeError('Index must be an integer')
        if not isinstance(item, self._data_type): raise TypeError(f'Type must be {(self._data_type)}')

        if index >= self._item_count or index < -self._item_count:
            raise IndexError(f'{index} is out of bounds.')
            
        self._items[index] = item

    def append(self, data: T) -> None:
        current_item_count = self._item_count

        if self._item_count == len(self._items):
            size = len(self._items) * 2 if len(self._items) > 0 else 2
            self._resize(size)

        self._items[self._item_count] = data
        self._item_count = current_item_count + 1

    def append_front(self, data: T) -> None:
        if self._item_count == len(self._items):
            size = len(self._items) * 2 if len(self._items) > 0 else 1
            self._resize(size)

        for i in range(self._item_count - 1, 0, -1): 
            self[i] = self[i - 1]

        self[0] = data
        self._item_count += 1

    def pop(self) -> None:
        if self._item_count == 0: raise IndexError('Array is empty.')
        
        del self[self._item_count - 1]
    
    def pop_front(self) -> None:
        if self._item_count == 0: raise IndexError('Array is empty.')
        
        del self[0]

    def __len__(self) -> int: return self._item_count

    def _resize(self, new_size: int) -> None:
        if new_size < 0: raise ValueError('New size must be a positive integer.')
        
        if new_size > len(self._items):
            default_value = self._data_type()
            new_items = np.array([default_value] * (new_size - len(self._items)))
            self._items = np.append(self._items, new_items)
        else:
            self._items = self._items[:new_size]
            self._item_count = new_size

    def __eq__(self, other: object) -> bool:
        return isinstance(other, Array) and len(self) == len(other) and all(self[i] == other[i] for i in range(self._item_count))

    def __iter__(self) -> Iterator[T]:
        for i in range(self._item_count):
            item_at_i = self._items[i]
            yield item_at_i.item() if isinstance(item_at_i, np.generic) else item_at_i

    def __reversed__(self) -> Iterator[T]:
        for i in range(self._item_count - 1, -1, -1):
            item_at_i = self._items[i]
            yield item_at_i.item() if isinstance(item_at_i, np.generic) else item_at_i

    def __delitem__(self, index: int) -> None:
        if index < 0 or index >= len(self._items): raise IndexError('Must be in range of array.')

        for i in range(index, self._item_count - 1):
            self._items[i] = self._items[i + 1]

        self._item_count -= 1

        self._item_count_before_resize = self._item_count
        if self._item_count <= len(self._items) // 4:
            self._resize(len(self._items) // 2)
            self._item_count = self._item_count_before_resize

    def __contains__(self, item: Any) -> bool:
        return any(self[i] == item for i in range(self._item_count))

    def clear(self) -> None:
        self._items = np.array([], dtype=self._data_type)
        self._item_count = 0

    def __str__(self) -> str:
        return '[' + ', '.join(str(item) for item in self) + ']'
    
    def __repr__(self) -> str:
        return f'Array {self.__str__()}, Logical: {self._item_count}, Physical: {len(self._items)}, type: {self._data_type}'
    

if __name__ == '__main__':
    filename = os.path.basename(__file__)
    print(f'This is the {filename} file.\nDid you mean to run your tests or program.py file?\nFor tests, run them from the Test Explorer on the left.')