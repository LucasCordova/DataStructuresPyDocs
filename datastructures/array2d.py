# datastructures.array2d.Array2D

""" This module defines an Array2D class that represents a two-dimensional array. 
    The Array class uses a datastructures.Array object as the internal data structure. 
    The Array class adheres to the docstring requirements per method, including raising 
    appropriate exceptions where indicated.
"""



from typing import Any

from datastructures.array import Array


class Array2D:
    """ Class Array2D - representing 2D data using a 1D Array
            Stipulations:
            1. Must use an Array object as the internal data 
                structure from the Array assignment.
            2. Must adhere to the docstring requirements per method, 
                including raising raising appropriate exceptions where indicated.
    """

    def __init__(self, rows: int = 0, columns: int = 0, default_item_value = None) -> None:
        """ Array2D Constructor. Initializes the Array2D with the desired size and default value.
            
        Examples:
            >>> array2d = Array2D(rows=2, columns=3)
            >>> print(array2d)
            [[None, None, None], [None, None, None]]

        Args:
            rows (int): the desired number of rows.
            columns (int): the desired number of columns.
            default_item_value (Any): the default value to initialize the Array2D items with.
        
        Returns:
            None
        """
        raise NotImplementedError('Array2D.__init__')

    def __getitem__(self, row_index: int) -> Any:
        """ Bracket operator for accessing an item. This bracket operator is used to 
            access the first dimension (row). This should return an object that allows
            the bracket operator to be used again to access the second dimension (column).
        
        Examples:
            >>> array2d = Array2D(rows=2, columns=3)
            >>> array2d[0][0] = 1
            >>> print(array2d[0][0])
            1
        """
        raise NotImplementedError('Array2D.__getitem__')
    
    @property
    def dimensions(self):
        """ Property for getting dimensions of the Array2D.

        Examples:
            >>> array2d = Array2D(rows=2, columns=3)
            >>> print(array2d.dimensions)
            (2, 3)
            >>> rows, columns = array2d.dimensions
            >>> print(rows)
            2
            >>> print(columns)
            3
        """
        raise NotImplementedError('Array2D.dimensions')

    def resize_columns(self, new_columns_len: int) -> None:
        """ Resize the length of the columns. Must be able to handle both increasing and 
            decreasing the size of the columns. Must not lose any data when resizing
            the columns. If the new length is smaller, then the data will be truncated.

        Examples:
            >>> array2d = Array2D(rows=2, columns=3)
            >>> array2d.resize_columns(4)
            >>> print(array2d.dimensions)
            (2, 4)
            >>> array2d.resize_columns(2)
            >>> print(array2d.dimensions)
            (2, 2)
        """
        raise NotImplementedError('Array2D.resize_columns')

    def resize_rows(self, new_rows_len: int) -> None:
        """ Resize the length of the rows. Must be able to handle both increasing and
            decreasing the size of the rows. Must not lose any data when resizing the rows.
            If the new length is smaller, then the data will be truncated.
            
        Examples:
            >>> array2d = Array2D(rows=2, columns=3)
            >>> array2d.resize_rows(4)
            >>> print(array2d.dimensions)
            (4, 3)
            >>> array2d.resize_rows(2)
            >>> print(array2d.dimensions)
            (2, 3)
        """
        raise NotImplementedError('Array2D.resize_rows')

    def __eq__(self, other: object) -> bool:
        """ Equality operator ==.

        Examples:
            >>> array2d1 = Array2D(rows=2, columns=3)
            >>> array2d2 = Array2D(rows=2, columns=3)
            >>> print(array2d1 == array2d2)
            True
            >>> array2d2[0][0] = 1
            >>> print(array2d1 == array2d2)
            False
        """
        raise NotImplementedError('Array2D.__eq__')

    def __ne__(self, other: object) -> bool:
        """ Non-equality operator !=.
        
        Examples:
            >>> array2d1 = Array2D(rows=2, columns=3)
            >>> array2d2 = Array2D(rows=2, columns=3)
            >>> print(array2d1 != array2d2)
            False
            >>> array2d2[0][0] = 1
            >>> print(array2d1 != array2d2)
            True
        """
        raise NotImplementedError('Array2D.__ne__')

    def __contains__(self, item: Any) -> bool:
        """ Contains operator (in).

        Examples:
            >>> array2d = Array2D(rows=2, columns=3)
            >>> print(3 in array2d)
            False
            >>> array2d[0][0] = 3
            >>> print(3 in array2d)
            True
        """
        raise NotImplementedError('Array2D.__contains__')

    def __str__(self) -> str:
        """ Return a string representation of the data and structure

        Examples:
            >>> array2d = Array2D(rows=2, columns=3)
            >>> print(array2d)
            [[None, None, None], [None, None, None]]
        
        """
        raise NotImplementedError('Array2D.__str__')

    def __repr__(self) -> str:
        """ Return a string representation of the data and structure.

        Examples:
            >>> array2d = Array2D(rows=2, columns=3)
            >>> print(repr(array2d))
            [[None, None, None], [None, None, None]]
        """
        raise NotImplementedError('Array2D.__repr__')