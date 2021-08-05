---
title: "<a href='https://github.com/rheasukthanker/CloudCoveragePrediction'> Post Processing Cloud Cover Forecasts Using Deep Learning </a>"
excerpt: "MeteoSwiss' COSMO numerical weather prediction (NWP) system produces an ensemble of hourly forecasts every point on a grid over the map of Switzerland. 
This project aims to post-process the forecasts using Machine Learning to specifically predict cloud coverage. The prediction needs to be both accurate and well calibrated,
meaning it should also give accurate uncertainty measurements. <br/><img src='/images/cloud_grid.PNG'>. We have devised a post-processing method, for cloud coverage forecasts, which is able to improve the CRPS(Continuous Ranked Probability Score)and calibration of the DMO. Furthermore, we extend the architecture in order to predict a non-parametric distribution and by doing so, improve the CRPS even more. The models are able to generalize to unseen points while still outperforming the DMO (Direct Model Output) <br/><img src='/images/cloud.PNG'> "

collection: portfolio
---
MeteoSwiss' COSMO numerical weather prediction (NWP) system produces an ensemble of hourly forecasts every point on a grid over the map of Switzerland. 
This project aims to post-process the forecasts using Machine Learning to specifically predict cloud coverage. The prediction needs to be both accurate and well calibrated,
meaning it should also give accurate uncertainty measurements. <br/><img src='/images/cloud_grid.PNG'>. We have devised a post-processing method, similar to [14], for cloud coverage forecasts, which is able to improve the CRPS(Continuous Ranked Probability Score)and calibration of the DMO. Furthermore, we extend the architecture in order to predict a non-parametric distribution and by doing so, improve the CRPS even more. The models are able to generalize to unseen points while still outperforming the DMO (Direct Model Output) <br/><img src='/images/cloud.PNG'>
