(defproject nihl "0.1.0-0"
  :description "Metroidvania platformer with a focus on combat."
  :url "http://example.com/FIXME"

  :license {:name "The MIT License"
            :url "opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [org.clojure/core.async "0.2.374"]
                 [cljsjs/react "0.14.3-0"]
                 [cljsjs/react-dom "0.14.3-1"]
                 [cljsjs/react-dom-server "0.14.3-0"]
                 [sablono "0.5.3"]]

  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-figwheel "0.5.0-6"]]

  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/nihl.js"
                                    :target-path]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{
        :id "nihl"
        :source-paths ["src"]
        :figwheel true
        :compiler {:main nihl.core
                   :asset-path "js/out"
                   :output-to "resources/public/js/nihl.js"
                   :output-dir "resources/public/js/out"
                   :source-map true
                   :source-map-timestamp true}}]}

  :figwheel {:css-dirs ["resources/public/css"]
             :open-file-command "vim"
             })
