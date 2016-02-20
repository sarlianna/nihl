(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [nihl.core]))
(figwheel.client/start {:build-id "nihl", :websocket-url "ws://localhost:3449/figwheel-ws"})

