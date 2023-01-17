// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  AccessSecretVersionResponse,
  CreateSecretRequest,
  CreateSecretVersionRequest,
  ListSecretVersionsResponse,
  ListSecretsResponse,
  Secret,
  SecretVersion,
  UpdateSecretRequest,
  UpdateSecretVersionRequest,
} from './types.gen'

export const unmarshalSecret = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Secret' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    id: data.id,
    name: data.name,
    projectId: data.project_id,
    region: data.region,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    versionCount: data.version_count,
  } as Secret
}

export const unmarshalSecretVersion = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SecretVersion' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    description: data.description,
    revision: data.revision,
    secretId: data.secret_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as SecretVersion
}

export const unmarshalAccessSecretVersionResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'AccessSecretVersionResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    data: data.data,
    revision: data.revision,
    secretId: data.secret_id,
  } as AccessSecretVersionResponse
}

export const unmarshalListSecretVersionsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSecretVersionsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    versions: unmarshalArrayOfObject(data.versions, unmarshalSecretVersion),
  } as ListSecretVersionsResponse
}

export const unmarshalListSecretsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSecretsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    secrets: unmarshalArrayOfObject(data.secrets, unmarshalSecret),
    totalCount: data.total_count,
  } as ListSecretsResponse
}

export const marshalCreateSecretRequest = (
  request: CreateSecretRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  tags: request.tags,
})

export const marshalCreateSecretVersionRequest = (
  request: CreateSecretVersionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  data: request.data,
  description: request.description,
})

export const marshalUpdateSecretRequest = (
  request: UpdateSecretRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
  name: request.name,
  tags: request.tags,
})

export const marshalUpdateSecretVersionRequest = (
  request: UpdateSecretVersionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  description: request.description,
})
