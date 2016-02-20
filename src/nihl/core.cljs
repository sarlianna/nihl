(ns nihl.core
  (:require
    [cljsjs.react]
    [sablono.core :as sab :include-macros true]
    [cljs.core.async :refer [<! chan sliding-buffer put! close! timeout]])
  (:require-macros
    [cljs.core.async.macros :refer [go-loop go]]))

(enable-console-print!)

(defn floor [x] (.floor js/Math x))

(def gravity 0.05)
(def jump-vel 10)
(def floor-y 441)
(def player-height 41)
(def player-width 57)
; hard-coded for now, eventually should be inside enemy-list
; and read from there
(def enemy-width 86)
(def enemy-height 50)

; read something about not using global state for functional style but some other
; complicted things, should look into that
(def starting-state {:x 212
                     :y 400
                     :x-vel 0
                     :y-vel 0
                     :health 5
                     :attack 1
                     :level 1
                     :exp 0
                     :midair? false
                     :attacking? false
                     :game-started? false
                     :cur-time 0
                     :start-time 0
                     :timer-running? false
                     :enemy-list [{:x 0
                                   :y 0
                                   :x-vel 0
                                   :y-vel 0
                                   :health 1
                                   :attack 1
                                   :worth 1
                                   :name ""}]
                     :item-list [{:x 0
                                  :y 0
                                  :name ""
                                  :type ""}]})

(defn reset-state [_ cur-time]
  (-> starting-state
      (assoc :game-started? true
             :start-time cur-time
             :timer-running? true)))

(defonce game-state (atom starting-state))

(defn in-enemy? [])

(defn hit-floor? [{:keys [y]}]
  (>= y (- floor-y player-height)))

(defn collision? [state])

(defn game-over? [state])

(defn new-enemy [state])

(defn update-enemies [state])

(defn update-player [{:keys [time-delta x y x-vel y-vel] :as st}]
  )

(defn update-ui [state])

(defn update-world [state]
  (-> state
      update-player
      update-enemies
      collision?
      game-over?
      update-ui))

(defn jump [{:keys [x-vel y-vel midair?] :as st}])

(defn check-input [event])

; rendering functions?

(defn translate [start-pos vel time]
  (floor (+ start-pos (* time vel))))

(defn render-border [{:keys [cur-time x-vel] :as state}]
  (-> state
      (assoc :border-pos (mod (translate 0 x-vel cur-time) 23))))

(defn render-world [state]
  (-> state
      render-border))

(defn time-loop [time]
  (let [new-state (swap! game-state update-world)]
    (when (:game-started? new-state)
      (go
        (<! (timeout 30))
        (.requestAnimationFrame js/window time-loop)))))

(defn start-game []
  (.requestAnimationFrame
    js/window
    (fn [time]
      (reset! game-state (reset-state @game-state time))
      (time-loop time))))

(defn px [n] (str n "px"))

(defn main-template [{:keys [game-started? health border-pos x y]}]
  (sab/html [:div.board {:onMouseDown (fn [e]
                                        (swap! game-state jump)
                                        (.preventDefault e))
                         :onKeyDown check-input}
             [:h1.score health]
             (if-not game-started?
               [:a.start-button {:onClick #(start-game)} "START"]
               [:span])
             [:div.flappy {:style {:top (px y) :left (px x)}}]
             [:div.scrolling-border {:style {:background-position-x (px border-pos)}}]]))

(let [node (.getElementById js/document "board-area")]
  (defn renderer [full-state]
    (.render js/React (main-template full-state) node)))

(add-watch game-state :renderer (fn [_ _ _ n]
                                  (renderer (render-world n))))

(reset! game-state @game-state)
