#!/bin/sh
#
# Simple rsync from hbUi.sse/dist/... to a given target project lib for quick dev turnaround
#
export HBUI_SSE_HOME=/home/patrick/Documents/hb/5/workspace/hbUi.sse/
export HBUI_SSE_DIST=${HBUI_SSE_HOME}/main/dist/
export HBUI_SSE_TARGET=/home/patrick/Documents/hb/5/workspace/hb-ui/main/lib/hbUi.sse/
cd ${HBUI_SSE_HOME}/main/
grunt
rsync -avuzb  ${HBUI_SSE_DIST}/ ${HBUI_SSE_TARGET}/ 

