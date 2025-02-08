#!/usr/bin/env bash

# experimental-strip-types flag is needed for node (22.6.0, 23.6.0]
node --experimental-strip-types . $@
