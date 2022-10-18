# noodleloverslp.com

## Deployment
```AWS CLI
$ aws s3 sync ./ s3://noodleloverslp.com --delete --exclude ".git/*" --exclude "README.md" --profile noodleloverslp
```
## Invalidation
```AWS CLI
$ aws cloudfront create-invalidation --distribution-id E1R2FZFV558WOQ --paths "/*" --profile noodleloverslp
```
