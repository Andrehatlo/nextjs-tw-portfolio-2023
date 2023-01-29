# Goal is to make BTC by manipulating the SMA, EMA, MACD, RSI, and Bollinger Bands indicators to make a bot know before the market does if it is bullish or bearish and if it is oversold or overbought and if it is time to buy or sell and if it is time to take profits or cut losses and if it is time to trail the stop loss and if it is time to buy more or sell more 

# import libraries
import time
import requests
import json
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import mplfinance as mpf
import datetime
import pytz
import ccxt
import talib


# import the api key and secret
from api_key import api_key, secret

# define the exchange
exchange = ccxt.binance({
    'apiKey': api_key,
})

# define the pair
pair = 'BTC/USDT'

# define the timeframe
timeframe = '1h'

# define the time to wait between each request
time_to_wait = 60

# define the function to get the data
def get_data():
    # get the data
    data = exchange.fetch_ohlcv(pair, timeframe)
    # convert the data to a dataframe
    df = pd.DataFrame(data, columns=['time', 'open', 'high', 'low', 'close', 'volume'])
    # convert the time to a datetime object
    df['time'] = pd.to_datetime(df['time'], unit='ms')
    # set the time as the index
    df.set_index('time', inplace=True)
    # return the dataframe
    return df

# define the function to get the indicators
def get_indicators(df):
    # get the MACD
    macd, macdsignal, macdhist = talib.MACD(df['close'], fastperiod=12, slowperiod=26, signalperiod=9)
    # get the RSI
    rsi = talib.RSI(df['close'], timeperiod=14)
    # get the Bollinger Bands
    upper, middle, lower = talib.BBANDS(df['close'], timeperiod=20, nbdevup=2, nbdevdn=2, matype=0)
    # get the SMA
    sma = talib.SMA(df['close'], timeperiod=20)
    # get the EMA
    ema = talib.EMA(df['close'], timeperiod=20)
    # add the indicators to the dataframe
    df['MACD'] = macd
    df['MACD Signal'] = macdsignal
    df['MACD Histogram'] = macdhist
    df['RSI'] = rsi
    df['Upper Bollinger Band'] = upper
    df['Middle Bollinger Band'] = middle
    df['Lower Bollinger Band'] = lower
    df['SMA'] = sma
    df['EMA'] = ema
    # return the dataframe
    return df

# define the function to plot the data
def plot_data(df):
    # create the plot
    fig, ax = plt.subplots(figsize=(16,9))
    # plot the data
    ax.plot(df['close'], label='Price')
    ax.plot(df['SMA'], label='SMA')
    ax.plot(df['EMA'], label='EMA')
    ax.plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax.plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax.plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax.set_title(f'{pair} {timeframe}')
    # set the legend
    ax.legend()
    # show the plot
    plt.show()

# define the function to plot the indicators
def plot_indicators(df):
    # create the plot
    fig, ax = plt.subplots(figsize=(16,9))
    # plot the data
    ax.plot(df['MACD'], label='MACD')
    ax.plot(df['MACD Signal'], label='MACD Signal')
    ax.plot(df['MACD Histogram'], label='MACD Histogram')
    ax.plot(df['RSI'], label='RSI')
    # set the title
    ax.set_title(f'{pair} {timeframe}')
    # set the legend
    ax.legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators(df):
    # create the plot
    fig, ax = plt.subplots(2, 1, figsize=(16,9))
    # plot the data
    ax[0].plot(df['close'], label='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles(df):
    # create the plot
    fig, ax = plt.subplots(2, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume(df):
    # create the plot
    fig, ax = plt.subplots(2, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi(df):
    # create the plot
    fig, ax = plt.subplots(3, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi(df):
    # create the plot
    fig, ax = plt.subplots(4, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi_and_stoch(df):
    # create the plot
    fig, ax = plt.subplots(5, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # plot the Stoch
    ax[4].plot(df['%K'], label='%K')
    ax[4].plot(df['%D'], label='%D')
    # set the title
    ax[4].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[4].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi_and_stoch_and_adx(df):
    # create the plot
    fig, ax = plt.subplots(6, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # plot the Stoch
    ax[4].plot(df['%K'], label='%K')
    ax[4].plot(df['%D'], label='%D')
    # set the title
    ax[4].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[4].legend()
    # plot the ADX
    ax[5].plot(df['ADX'], label='ADX')
    # set the title
    ax[5].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[5].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi_and_stoch_and_adx_and_obv(df):
    # create the plot
    fig, ax = plt.subplots(7, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # plot the Stoch
    ax[4].plot(df['%K'], label='%K')
    ax[4].plot(df['%D'], label='%D')
    # set the title
    ax[4].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[4].legend()
    # plot the ADX
    ax[5].plot(df['ADX'], label='ADX')
    # set the title
    ax[5].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[5].legend()
    # plot the OBV
    ax[6].plot(df['OBV'], label='OBV')
    # set the title
    ax[6].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[6].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi_and_stoch_and_adx_and_obv_and_vpt(df):
    # create the plot
    fig, ax = plt.subplots(8, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # plot the Stoch
    ax[4].plot(df['%K'], label='%K')
    ax[4].plot(df['%D'], label='%D')
    # set the title
    ax[4].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[4].legend()
    # plot the ADX
    ax[5].plot(df['ADX'], label='ADX')
    # set the title
    ax[5].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[5].legend()
    # plot the OBV
    ax[6].plot(df['OBV'], label='OBV')
    # set the title
    ax[6].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[6].legend()
    # plot the VPT
    ax[7].plot(df['VPT'], label='VPT')
    # set the title
    ax[7].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[7].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi_and_stoch_and_adx_and_obv_and_vpt_and_vwap(df):
    # create the plot
    fig, ax = plt.subplots(9, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # plot the Stoch
    ax[4].plot(df['%K'], label='%K')
    ax[4].plot(df['%D'], label='%D')
    # set the title
    ax[4].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[4].legend()
    # plot the ADX
    ax[5].plot(df['ADX'], label='ADX')
    # set the title
    ax[5].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[5].legend()
    # plot the OBV
    ax[6].plot(df['OBV'], label='OBV')
    # set the title
    ax[6].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[6].legend()
    # plot the VPT
    ax[7].plot(df['VPT'], label='VPT')
    # set the title
    ax[7].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[7].legend()
    # plot the VWAP
    ax[8].plot(df['VWAP'], label='VWAP')
    # set the title
    ax[8].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[8].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi_and_stoch_and_adx_and_obv_and_vpt_and_vwap_and_ichimoku(df):
    # create the plot
    fig, ax = plt.subplots(10, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # plot the Stoch
    ax[4].plot(df['%K'], label='%K')
    ax[4].plot(df['%D'], label='%D')
    # set the title
    ax[4].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[4].legend()
    # plot the ADX
    ax[5].plot(df['ADX'], label='ADX')
    # set the title
    ax[5].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[5].legend()
    # plot the OBV
    ax[6].plot(df['OBV'], label='OBV')
    # set the title
    ax[6].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[6].legend()
    # plot the VPT
    ax[7].plot(df['VPT'], label='VPT')
    # set the title
    ax[7].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[7].legend()
    # plot the VWAP
    ax[8].plot(df['VWAP'], label='VWAP')
    # set the title
    ax[8].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[8].legend()
    # plot the Ichimoku
    ax[9].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[9].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[9].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[9].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[9].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[9].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[9].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi_and_stoch_and_adx_and_obv_and_vpt_and_vwap_and_ichimoku_and_bbands(df):
    # create the plot
    fig, ax = plt.subplots(11, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # plot the Stoch
    ax[4].plot(df['%K'], label='%K')
    ax[4].plot(df['%D'], label='%D')
    # set the title
    ax[4].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[4].legend()
    # plot the ADX
    ax[5].plot(df['ADX'], label='ADX')
    # set the title
    ax[5].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[5].legend()
    # plot the OBV
    ax[6].plot(df['OBV'], label='OBV')
    # set the title
    ax[6].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[6].legend()
    # plot the VPT
    ax[7].plot(df['VPT'], label='VPT')
    # set the title
    ax[7].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[7].legend()
    # plot the VWAP
    ax[8].plot(df['VWAP'], label='VWAP')
    # set the title
    ax[8].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[8].legend()
    # plot the Ichimoku
    ax[9].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[9].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[9].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[9].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[9].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[9].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[9].legend()
    # plot the BBands
    ax[10].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[10].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[10].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[10].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[10].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi_and_stoch_and_adx_and_obv_and_vpt_and_vwap_and_ichimoku_and_bbands_and_atr(df):
    # create the plot
    fig, ax = plt.subplots(12, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # plot the Stoch
    ax[4].plot(df['%K'], label='%K')
    ax[4].plot(df['%D'], label='%D')
    # set the title
    ax[4].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[4].legend()
    # plot the ADX
    ax[5].plot(df['ADX'], label='ADX')
    # set the title
    ax[5].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[5].legend()
    # plot the OBV
    ax[6].plot(df['OBV'], label='OBV')
    # set the title
    ax[6].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[6].legend()
    # plot the VPT
    ax[7].plot(df['VPT'], label='VPT')
    # set the title
    ax[7].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[7].legend()
    # plot the VWAP
    ax[8].plot(df['VWAP'], label='VWAP')
    # set the title
    ax[8].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[8].legend()
    # plot the Ichimoku
    ax[9].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[9].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[9].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[9].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[9].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[9].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[9].legend()
    # plot the BBands
    ax[10].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[10].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[10].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[10].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[10].legend()
    # plot the ATR  
    ax[11].plot(df['ATR'], label='ATR')
    # set the title
    ax[11].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[11].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi_and_stoch_and_adx_and_obv_and_vpt_and_vwap_and_ichimoku_and_bbands_and_atr_and_cci(df):
    # create the plot
    fig, ax = plt.subplots(13, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # plot the Stoch
    ax[4].plot(df['%K'], label='%K')
    ax[4].plot(df['%D'], label='%D')
    # set the title
    ax[4].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[4].legend()
    # plot the ADX
    ax[5].plot(df['ADX'], label='ADX')
    # set the title
    ax[5].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[5].legend()
    # plot the OBV
    ax[6].plot(df['OBV'], label='OBV')
    # set the title
    ax[6].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[6].legend()
    # plot the VPT
    ax[7].plot(df['VPT'], label='VPT')
    # set the title
    ax[7].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[7].legend()
    # plot the VWAP
    ax[8].plot(df['VWAP'], label='VWAP')
    # set the title
    ax[8].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[8].legend()
    # plot the Ichimoku
    ax[9].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[9].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[9].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[9].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[9].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[9].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[9].legend()
    # plot the BBands
    ax[10].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[10].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[10].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[10].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[10].legend()
    # plot the ATR
    ax[11].plot(df['ATR'], label='ATR')
    # set the title
    ax[11].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[11].legend()
    # plot the CCI
    ax[12].plot(df['CCI'], label='CCI')
    # set the title
    ax[12].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[12].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi_and_stoch_and_adx_and_obv_and_vpt_and_vwap_and_ichimoku_and_bbands_and_atr_and_cci_and_macd(df):
    # create the plot
    fig, ax = plt.subplots(14, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # plot the Stoch
    ax[4].plot(df['%K'], label='%K')
    ax[4].plot(df['%D'], label='%D')
    # set the title
    ax[4].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[4].legend()
    # plot the ADX
    ax[5].plot(df['ADX'], label='ADX')
    # set the title
    ax[5].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[5].legend()
    # plot the OBV
    ax[6].plot(df['OBV'], label='OBV')
    # set the title
    ax[6].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[6].legend()
    # plot the VPT
    ax[7].plot(df['VPT'], label='VPT')
    # set the title
    ax[7].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[7].legend()
    # plot the VWAP
    ax[8].plot(df['VWAP'], label='VWAP')
    # set the title
    ax[8].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[8].legend()
    # plot the Ichimoku
    ax[9].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[9].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[9].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[9].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[9].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[9].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[9].legend()
    # plot the BBands
    ax[10].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[10].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[10].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[10].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[10].legend()
    # plot the ATR
    ax[11].plot(df['ATR'], label='ATR')
    # set the title
    ax[11].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[11].legend()
    # plot the CCI
    ax[12].plot(df['CCI'], label='CCI')
    # set the title
    ax[12].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[12].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi_and_stoch_and_adx_and_obv_and_vpt_and_vwap_and_ichimoku_and_bbands_and_atr_and_cci_and_macd_and_bbands(df):
    # create the plot
    fig, ax = plt.subplots(15, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # plot the Stoch
    ax[4].plot(df['%K'], label='%K')
    ax[4].plot(df['%D'], label='%D')
    # set the title
    ax[4].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[4].legend()
    # plot the ADX
    ax[5].plot(df['ADX'], label='ADX')
    # set the title
    ax[5].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[5].legend()
    # plot the OBV
    ax[6].plot(df['OBV'], label='OBV')
    # set the title
    ax[6].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[6].legend()
    # plot the VPT
    ax[7].plot(df['VPT'], label='VPT')
    # set the title
    ax[7].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[7].legend()
    # plot the VWAP
    ax[8].plot(df['VWAP'], label='VWAP')
    # set the title
    ax[8].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[8].legend()
    # plot the Ichimoku
    ax[9].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[9].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[9].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[9].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[9].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[9].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[9].legend()
    # plot the BBands
    ax[10].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[10].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[10].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[10].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[10].legend()
    # plot the ATR
    ax[11].plot(df['ATR'], label='ATR')
    # set the title
    ax[11].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[11].legend()
    # plot the CCI
    ax[12].plot(df['CCI'], label='CCI')
    # set the title
    ax[12].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[12].legend()
    # show the plot
    plt.show()

# define the function to plot the data and indicators
def plot_data_and_indicators_with_candles_and_volume_and_rsi_and_mfi_and_stoch_and_adx_and_obv_and_vpt_and_vwap_and_ichimoku_and_bbands_and_atr_and_cci_and_macd_and_bbands_and_ichimoku(df):
    # create the plot
    fig, ax = plt.subplots(16, 1, figsize=(16,9))
    # plot the data
    mpf.plot(df, type='candle', ax=ax[0], style='charles', title=f'{pair} {timeframe}', ylabel='Price')
    ax[0].plot(df['SMA'], label='SMA')
    ax[0].plot(df['EMA'], label='EMA')
    ax[0].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[0].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[0].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[0].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[0].legend()
    # plot the indicators
    ax[1].plot(df['MACD'], label='MACD')
    ax[1].plot(df['MACD Signal'], label='MACD Signal')
    ax[1].plot(df['MACD Histogram'], label='MACD Histogram')
    ax[1].plot(df['RSI'], label='RSI')
    # set the title
    ax[1].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[1].legend()
    # plot the volume
    ax[2].plot(df['volume'], label='Volume')
    # set the title
    ax[2].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[2].legend()
    # plot the MFI
    ax[3].plot(df['MFI'], label='MFI')
    # set the title
    ax[3].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[3].legend()
    # plot the Stoch
    ax[4].plot(df['%K'], label='%K')
    ax[4].plot(df['%D'], label='%D')
    # set the title
    ax[4].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[4].legend()
    # plot the ADX
    ax[5].plot(df['ADX'], label='ADX')
    # set the title
    ax[5].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[5].legend()
    # plot the OBV
    ax[6].plot(df['OBV'], label='OBV')
    # set the title
    ax[6].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[6].legend()
    # plot the VPT
    ax[7].plot(df['VPT'], label='VPT')
    # set the title
    ax[7].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[7].legend()
    # plot the VWAP
    ax[8].plot(df['VWAP'], label='VWAP')
    # set the title
    ax[8].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[8].legend()
    # plot the Ichimoku
    ax[9].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[9].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[9].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[9].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[9].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[9].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[9].legend()
    # plot the BBands
    ax[10].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[10].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[10].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[10].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[10].legend()
    # plot the ATR
    ax[11].plot(df['ATR'], label='ATR')
    # set the title
    ax[11].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[11].legend()
    # plot the CCI
    ax[12].plot(df['CCI'], label='CCI')
    # set the title
    ax[12].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[12].legend()
    # plot the Ichimoku
    ax[13].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[13].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[13].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[13].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[13].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[13].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[13].legend()
    # plot the BBands
    ax[14].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[14].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[14].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[14].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[14].legend()
    # plot the ATR
    ax[15].plot(df['ATR'], label='ATR')
    # set the title
    ax[15].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[15].legend()
    # plot the CCI
    ax[16].plot(df['CCI'], label='CCI')
    # set the title
    ax[16].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[16].legend()
    # plot the Ichimoku
    ax[17].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[17].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[17].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[17].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[17].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[17].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[17].legend()
    # plot the BBands
    ax[18].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[18].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[18].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[18].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[18].legend()
    # plot the ATR
    ax[19].plot(df['ATR'], label='ATR')
    # set the title
    ax[19].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[19].legend()
    # plot the CCI
    ax[20].plot(df['CCI'], label='CCI')
    # set the title
    ax[20].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[20].legend()
    # plot the Ichimoku
    ax[21].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[21].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[21].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[21].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[21].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[21].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[21].legend()
    # plot the BBands
    ax[22].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[22].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[22].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[22].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[22].legend()
    # plot the ATR
    ax[23].plot(df['ATR'], label='ATR')
    # set the title
    ax[23].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[23].legend()
    # plot the CCI
    ax[24].plot(df['CCI'], label='CCI')
    # set the title
    ax[24].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[24].legend()
    # plot the Ichimoku
    ax[25].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[25].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[25].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[25].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[25].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[25].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[25].legend()
    # plot the BBands
    ax[26].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[26].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[26].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[26].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[26].legend()
    # plot the ATR
    ax[27].plot(df['ATR'], label='ATR')
    # set the title
    ax[27].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[27].legend()
    # plot the CCI
    ax[28].plot(df['CCI'], label='CCI')
    # set the title
    ax[28].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[28].legend()
    # plot the Ichimoku
    ax[29].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[29].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[29].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[29].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[29].plot(df['Chikou Span'], label='Chikou Span')
    # set the title

    ax[29].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[29].legend()
    # plot the BBands
    ax[30].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[30].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')

    ax[30].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[30].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[30].legend()
    # plot the ATR
    ax[31].plot(df['ATR'], label='ATR')
    # set the title
    ax[31].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[31].legend()
    # plot the CCI
    ax[32].plot(df['CCI'], label='CCI')
    # set the title
    ax[32].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[32].legend()
    # plot the Ichimoku
    ax[33].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[33].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[33].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[33].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[33].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[33].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[33].legend()
    # plot the BBands
    ax[34].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[34].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[34].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[34].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[34].legend()
    # plot the ATR
    ax[35].plot(df['ATR'], label='ATR')
    # set the title
    ax[35].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[35].legend()
    # plot the CCI
    ax[36].plot(df['CCI'], label='CCI')
    # set the title
    ax[36].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[36].legend()
    # plot the Ichimoku
    ax[37].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[37].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[37].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[37].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[37].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[37].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[37].legend()
    # plot the BBands
    ax[38].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')

    ax[38].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[38].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[38].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[38].legend()
    # plot the ATR
    ax[39].plot(df['ATR'], label='ATR')
    # set the title
    ax[39].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[39].legend()
    # plot the CCI
    ax[40].plot(df['CCI'], label='CCI')
    # set the title
    ax[40].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[40].legend()
    # plot the Ichimoku
    ax[41].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[41].plot(df['Kijun-sen'], label='Kijun-sen')

    ax[41].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[41].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[41].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[41].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[41].legend()
    # plot the BBands
    ax[42].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[42].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[42].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[42].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[42].legend()
    # plot the ATR
    ax[43].plot(df['ATR'], label='ATR')
    # set the title
    ax[43].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[43].legend()
    # plot the CCI
    ax[44].plot(df['CCI'], label='CCI')
    # set the title
    ax[44].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[44].legend()
    # plot the Ichimoku
    ax[45].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[45].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[45].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[45].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[45].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[45].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[45].legend()
    # plot the BBands
    ax[46].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[46].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[46].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[46].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[46].legend()
    # plot the ATR
    ax[47].plot(df['ATR'], label='ATR')
    # set the title
    ax[47].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[47].legend()
    # plot the CCI
    ax[48].plot(df['CCI'], label='CCI')
    # set the title
    ax[48].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[48].legend()
    # plot the Ichimoku
    ax[49].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[49].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[49].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[49].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[49].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[49].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[49].legend()
    # plot the BBands
    ax[50].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[50].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[50].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[50].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[50].legend()
    # plot the ATR
    ax[51].plot(df['ATR'], label='ATR')
    # set the title
    ax[51].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[51].legend()
    # plot the CCI
    ax[52].plot(df['CCI'], label='CCI')
    # set the title
    ax[52].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[52].legend()
    # plot the Ichimoku
    ax[53].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[53].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[53].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[53].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[53].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[53].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[53].legend()
    # plot the BBands
    ax[54].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[54].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[54].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[54].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[54].legend()
    # plot the ATR
    ax[55].plot(df['ATR'], label='ATR')
    # set the title
    ax[55].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[55].legend()
    # plot the CCI
    ax[56].plot(df['CCI'], label='CCI')
    # set the title
    ax[56].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[56].legend()
    # plot the Ichimoku
    ax[57].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[57].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[57].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[57].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[57].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[57].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[57].legend()
    # plot the BBands
    ax[58].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[58].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')

    ax[58].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[58].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[58].legend()
    # plot the ATR
    ax[59].plot(df['ATR'], label='ATR')
    # set the title
    ax[59].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[59].legend()
    # plot the CCI
    ax[60].plot(df['CCI'], label='CCI')
    # set the title
    ax[60].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[60].legend()
    # plot the Ichimoku
    ax[61].plot(df['Tenkan-sen'], label='Tenkan-sen')

    ax[61].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[61].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[61].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[61].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[61].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[61].legend()
    # plot the BBands
    ax[62].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[62].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[62].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[62].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[62].legend()
    # plot the ATR
    ax[63].plot(df['ATR'], label='ATR')
    # set the title
    ax[63].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[63].legend()
    # plot the CCI
    ax[64].plot(df['CCI'], label='CCI')
    # set the title
    ax[64].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[64].legend()
    # plot the Ichimoku
    ax[65].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[65].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[65].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[65].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[65].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[65].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[65].legend()
    # plot the BBands
    ax[66].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[66].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[66].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[66].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[66].legend()
    # plot the ATR
    ax[67].plot(df['ATR'], label='ATR')
    # set the title
    ax[67].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[67].legend()
    # plot the CCI
    ax[68].plot(df['CCI'], label='CCI')
    # set the title
    ax[68].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[68].legend()
    # plot the Ichimoku
    ax[69].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[69].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[69].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[69].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[69].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[69].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[69].legend()
    # plot the BBands
    ax[70].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[70].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[70].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[70].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[70].legend()
    # plot the ATR
    ax[71].plot(df['ATR'], label='ATR')
    # set the title
    ax[71].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[71].legend()
    # plot the CCI
    ax[72].plot(df['CCI'], label='CCI')
    # set the title
    ax[72].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[72].legend()
    # plot the Ichimoku
    ax[73].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[73].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[73].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[73].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[73].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[73].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[73].legend()
    # plot the BBands
    ax[74].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[74].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[74].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[74].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[74].legend()
    # plot the ATR
    ax[75].plot(df['ATR'], label='ATR')
    # set the title
    ax[75].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[75].legend()
    # plot the CCI
    ax[76].plot(df['CCI'], label='CCI')
    # set the title
    ax[76].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[76].legend()
    # plot the Ichimoku
    ax[77].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[77].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[77].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[77].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[77].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[77].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[77].legend()
    # plot the BBands
    ax[78].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[78].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[78].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[78].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[78].legend()
    # plot the ATR
    ax[79].plot(df['ATR'], label='ATR')
    # set the title
    ax[79].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[79].legend()
    # plot the CCI
    ax[80].plot(df['CCI'], label='CCI')
    # set the title
    ax[80].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[80].legend()
    # plot the Ichimoku
    ax[81].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[81].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[81].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[81].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[81].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[81].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[81].legend()
    # plot the BBands
    ax[82].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[82].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[82].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[82].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[82].legend()
    # plot the ATR
    ax[83].plot(df['ATR'], label='ATR')
    # set the title
    ax[83].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[83].legend()
    # plot the CCI
    ax[84].plot(df['CCI'], label='CCI')
    # set the title
    ax[84].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[84].legend()
    # plot the Ichimoku
    ax[85].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[85].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[85].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[85].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[85].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[85].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[85].legend()
    # plot the BBands
    ax[86].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[86].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[86].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[86].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[86].legend()
    # plot the ATR
    ax[87].plot(df['ATR'], label='ATR')
    # set the title
    ax[87].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[87].legend()
    # plot the CCI
    ax[88].plot(df['CCI'], label='CCI')
    # set the title
    ax[88].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[88].legend()
    # plot the Ichimoku
    ax[89].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[89].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[89].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[89].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[89].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[89].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[89].legend()
    # plot the BBands
    ax[90].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[90].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[90].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[90].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[90].legend()
    # plot the ATR
    ax[91].plot(df['ATR'], label='ATR')
    # set the title
    ax[91].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[91].legend()
    # plot the CCI
    ax[92].plot(df['CCI'], label='CCI')
    # set the title
    ax[92].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[92].legend()
    # plot the Ichimoku
    ax[93].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[93].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[93].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[93].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[93].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[93].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[93].legend()
    # plot the BBands
    ax[94].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[94].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[94].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[94].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[94].legend()
    # plot the ATR
    ax[95].plot(df['ATR'], label='ATR')
    # set the title
    ax[95].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[95].legend()
    # plot the CCI
    ax[96].plot(df['CCI'], label='CCI')
    # set the title
    ax[96].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[96].legend()
    # plot the Ichimoku
    ax[97].plot(df['Tenkan-sen'], label='Tenkan-sen')
    ax[97].plot(df['Kijun-sen'], label='Kijun-sen')
    ax[97].plot(df['Senkou Span A'], label='Senkou Span A')
    ax[97].plot(df['Senkou Span B'], label='Senkou Span B')
    ax[97].plot(df['Chikou Span'], label='Chikou Span')
    # set the title
    ax[97].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[97].legend()
    # plot the BBands
    ax[98].plot(df['Upper Bollinger Band'], label='Upper Bollinger Band')
    ax[98].plot(df['Middle Bollinger Band'], label='Middle Bollinger Band')
    ax[98].plot(df['Lower Bollinger Band'], label='Lower Bollinger Band')
    # set the title
    ax[98].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[98].legend()
    # plot the ATR
    ax[99].plot(df['ATR'], label='ATR')
    # set the title
    ax[99].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[99].legend()
    # plot the CCI
    ax[100].plot(df['CCI'], label='CCI')
    # set the title
    ax[100].set_title(f'{pair} {timeframe}')
    # set the legend
    ax[100].legend()
    # show the plot
    plt.show()

# run the function 
plot_indicators(df, pair, timeframe)
    








