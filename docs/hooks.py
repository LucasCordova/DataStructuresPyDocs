import os
import shutil

def copy_get(config, **kwargs):
    site_dir = config['site_dir']
    shutil.copy('datastructures/iarray.py', os.path.join(site_dir, 'iarray.py'))
    shutil.copy('datastructures/array.py', os.path.join(site_dir, 'array.py'))
    shutil.copy('static/test_array.py', os.path.join(site_dir, 'test_array.py'))
    shutil.copy('static/ibinarysearchtree.py', os.path.join(site_dir, 'ibinarysearchtree.py'))