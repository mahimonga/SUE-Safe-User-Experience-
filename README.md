# SUE (Safe user experience)
*A web app to check if given url leads to phishing sites*

*Tech Stack - Python (ML Model), Bootstrap, HTML and CSS*
### Phishing
Phishing is one of the luring techniques used by phishing artist in the intention of exploiting the personal details of unsuspected users. Phishing website is a mock website that looks similar in appearance but different in destination. The unsuspected users post their data thinking that these websites come from trusted financial institutions. Several antiphishing techniques emerge continuously but phishers come with new technique by breaking all the antiphishing mechanisms. Hence there is a need for efficient mechanism for the prediction of phishing website.

### Safe User Experience
SUE classify a given url in phishing and non-phishing category and therefore insure that the user does not visit any malicious site and prevent intrusion.
SUE uses machine learning to predict the legitimacy of any website, depending upon the 30 features extracted from url.
Here we have trained multiple models to predict the legitimacy based on the features extracted from url, and loaded the most accurate model i.e XGBoost model as final model. The accuracy of different models are as follows:-

## Accuracy of models:
![model accuracy](https://gitlab.com/syedareehaquasar/tswe-project/-/raw/master/images/model_performance_Rankwise.PNG)

## Features extracted: 
![feature1 image](https://gitlab.com/syedareehaquasar/tswe-project/-/raw/master/images/f1.png)
![feature2 image](https://gitlab.com/syedareehaquasar/tswe-project/-/raw/master/images/f2.png)

### Website
We have developed the website using Flask, providing simple and easy mode for interaction. Just enter the url, the click on predict button to see the prediction.
User can also get some basic knowledge of phishing and its type from the website itself.
![website](https://gitlab.com/syedareehaquasar/tswe-project/-/raw/master/images/Website%20Screenshots/ezgif.com-gif-maker.gif)

### Dataset used in project
[Dataset](https://www.kaggle.com/akashkr/phishing-website-dataset)

### Google Drive Link
[Data used for colab files](https://drive.google.com/drive/folders/1SD2LyLzxf7nLRNsl6KSS_sY4IdWOa3f8?usp=sharing)

### References:
- https://docs.python.org/3/library/internet.html
- http://eprints.hud.ac.uk/id/eprint/24330/6/\\MohammadPhishing14July2015.pdf
- https://machinelearningmastery.com/machine-learning-in-python-step-by-step/
- https://flask.palletsprojects.com/en/1.1.x/
- https://courses.cognitiveclass.ai/courses/course-v1:CognitiveClass+ML0101ENv3+2018/course/

