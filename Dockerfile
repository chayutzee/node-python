FROM node:12.17.0-stretch

WORKDIR /opt/web

COPY . ./

WORKDIR /opt/web/app
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python get-pip.py
WORKDIR /opt/web/app/python-script
RUN pip install -r requirement.txt

WORKDIR /opt/web/app
RUN yarn install
EXPOSE 3000
CMD yarn run dev