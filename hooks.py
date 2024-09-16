import os
import shutil

def copy_get(config, **kwargs):
    site_dir = config['site_dir']
    shutil.copy('static/iarray.py', os.path.join(site_dir, 'iarray.py'))
    shutil.copy('static/array.py', os.path.join(site_dir, 'array.py'))